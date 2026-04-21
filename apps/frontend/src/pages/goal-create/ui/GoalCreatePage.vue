<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { OnboardingProgress } from '@/widgets/onboarding-progress'
import { useGoal } from '@/entities/goal'

const router = useRouter()
const route = useRoute()
const { createGoal } = useGoal()

// Detect if we're in onboarding mode (from budget-result) or standalone mode
const isOnboarding = computed(() => route.query.mode === 'onboarding')

const currentStep = ref(1)
const totalSteps = 6

const goalData = ref({
  name: '',
  description: '',
  targetAmount: '',
  targetDate: '',
})

const isLastStep = computed(() => currentStep.value === totalSteps)

const monthlySavings = computed(() => {
  if (!goalData.value.targetAmount || !goalData.value.targetDate) return 0
  const target = parseFloat(goalData.value.targetAmount)
  const end = new Date(goalData.value.targetDate)
  const now = new Date()
  const months = Math.max(1, Math.ceil((end - now) / (1000 * 60 * 60 * 24 * 30)))
  return Math.ceil(target / months)
})

const formattedTargetDate = computed(() => {
  if (!goalData.value.targetDate) return ''
  const date = new Date(goalData.value.targetDate)
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
})

function nextStep() {
  if (currentStep.value < totalSteps) {
    currentStep.value++
  }
}

function prevStep() {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

function close() {
  if (isOnboarding.value) {
    router.push({ name: 'home' })
  } else {
    router.back()
  }
}

async function createNewGoal() {
  currentStep.value = 5 // Show loading

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500))

  const newGoal = {
    name: goalData.value.name || 'My goal',
    description: goalData.value.description,
    targetAmount: parseFloat(goalData.value.targetAmount) || 0,
    currentAmount: 0,
    currency: 'CHF',
    endDate: goalData.value.targetDate,
  }

  createGoal(newGoal)

  currentStep.value = 6 // Show success
}

function goToDashboard() {
  localStorage.setItem('yuhlearn_onboarding_seen', 'true')
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="goal-create">
    <!-- Header -->
    <header class="goal-create__header">
      <div class="goal-create__logo">yuh</div>
      <div class="goal-create__actions">
        <button class="goal-create__icon" aria-label="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
        </button>
        <button class="goal-create__icon" aria-label="Download">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button class="goal-create__icon" aria-label="Close" @click="close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <OnboardingProgress
      :phase="2"
      :step="3"
      :total="3"
      :minutes="3"
    />

    <!-- Content -->
    <div class="goal-create__content">
      <Transition name="step" mode="out-in">
        <!-- Step 1: Intro -->
        <div v-if="currentStep === 1" key="step1" class="goal-create__step">
          <div class="goal-create__intro">
            <h1 class="goal-create__title">Let's set up your goal</h1>
            <p class="goal-create__subtitle">
              We'll create your savings goal in a few simple steps.
            </p>
          </div>

          <div class="goal-create__preview">
            <div class="goal-create__preview-item">
              <span class="goal-create__preview-label">How much do you want to save?</span>
              <span class="goal-create__preview-value">CHF {{ goalData.targetAmount || '0' }}</span>
            </div>
            <div class="goal-create__preview-item">
              <span class="goal-create__preview-label">When do you need it?</span>
              <span class="goal-create__preview-value">{{ formattedTargetDate || 'Not set' }}</span>
            </div>
          </div>

          <button class="goal-create__btn" @click="nextStep">
            Get started
          </button>
        </div>

        <!-- Step 2: Goal Name -->
        <div v-else-if="currentStep === 2" key="step2" class="goal-create__step">
          <h2 class="goal-create__step-title">What's your savings goal?</h2>
          <p class="goal-create__step-subtitle">Give your goal a name so you can find it easily.</p>

          <div class="goal-create__field">
            <label class="goal-create__label">Goal name</label>
            <input
              v-model="goalData.name"
              type="text"
              class="goal-create__input"
              placeholder="e.g. MacBook Pro M4"
              @keyup.enter="nextStep"
            />
          </div>

          <div class="goal-create__field">
            <label class="goal-create__label">Description (optional)</label>
            <textarea
              v-model="goalData.description"
              class="goal-create__textarea"
              placeholder="e.g. For my freelance work"
              rows="3"
            />
          </div>

          <div class="goal-create__actions-row">
            <button class="goal-create__btn goal-create__btn--secondary" @click="prevStep">
              Back
            </button>
            <button
              class="goal-create__btn"
              :disabled="!goalData.name"
              @click="nextStep"
            >
              Continue
            </button>
          </div>
        </div>

        <!-- Step 3: Target Amount -->
        <div v-else-if="currentStep === 3" key="step3" class="goal-create__step">
          <h2 class="goal-create__step-title">How much do you want to save?</h2>
          <p class="goal-create__step-subtitle">Enter the total amount you need.</p>

          <div class="goal-create__amount-field">
            <span class="goal-create__currency">CHF</span>
            <input
              v-model="goalData.targetAmount"
              type="number"
              class="goal-create__amount-input"
              placeholder="0"
              min="1"
              @keyup.enter="nextStep"
            />
          </div>

          <div class="goal-create__actions-row">
            <button class="goal-create__btn goal-create__btn--secondary" @click="prevStep">
              Back
            </button>
            <button
              class="goal-create__btn"
              :disabled="!goalData.targetAmount || goalData.targetAmount <= 0"
              @click="nextStep"
            >
              Continue
            </button>
          </div>
        </div>

        <!-- Step 4: Target Date -->
        <div v-else-if="currentStep === 4" key="step4" class="goal-create__step">
          <h2 class="goal-create__step-title">When do you need it?</h2>
          <p class="goal-create__step-subtitle">Pick a target date to reach your goal.</p>

          <div class="goal-create__field">
            <input
              v-model="goalData.targetDate"
              type="date"
              class="goal-create__input goal-create__input--date"
              :min="new Date().toISOString().split('T')[0]"
            />
          </div>

          <div class="goal-create__actions-row">
            <button class="goal-create__btn goal-create__btn--secondary" @click="prevStep">
              Back
            </button>
            <button
              class="goal-create__btn"
              :disabled="!goalData.targetDate"
              @click="nextStep"
            >
              Continue
            </button>
          </div>
        </div>

        <!-- Step 5: Summary -->
        <div v-else-if="currentStep === 5" key="step5" class="goal-create__step">
          <div v-if="currentStep === 5 && goalData.name" class="goal-create__summary">
            <h2 class="goal-create__step-title">You're almost there!</h2>
            <p class="goal-create__step-subtitle">Review your goal details before creating it.</p>

            <div class="goal-create__recap">
              <div class="goal-create__recap-item">
                <span class="goal-create__recap-label">Goal</span>
                <span class="goal-create__recap-value">{{ goalData.name }}</span>
              </div>
              <div class="goal-create__recap-item">
                <span class="goal-create__recap-label">Target amount</span>
                <span class="goal-create__recap-value">{{ parseFloat(goalData.targetAmount).toLocaleString() }} CHF</span>
              </div>
              <div class="goal-create__recap-item">
                <span class="goal-create__recap-label">Target date</span>
                <span class="goal-create__recap-value">{{ formattedTargetDate }}</span>
              </div>
              <div class="goal-create__recap-highlight">
                <span class="goal-create__recap-highlight-label">Required monthly savings</span>
                <span class="goal-create__recap-highlight-value">{{ monthlySavings }} CHF/month</span>
              </div>
            </div>

            <div class="goal-create__actions-row">
              <button class="goal-create__btn goal-create__btn--secondary" @click="prevStep">
                Edit
              </button>
              <button class="goal-create__btn" @click="createNewGoal">
                Create my goal
              </button>
            </div>
          </div>

          <!-- Loading State -->
          <div v-else class="goal-create__loading">
            <div class="goal-create__rocket">🚀</div>
            <h2 class="goal-create__loading-title">Here we go!</h2>
            <p class="goal-create__loading-text">Creating your goal...</p>
          </div>
        </div>

        <!-- Step 6: Success -->
        <div v-else-if="currentStep === 6" key="step6" class="goal-create__step">
          <div class="goal-create__success">
            <div class="goal-create__success-icon">🎉</div>
            <h2 class="goal-create__success-title">Goal created!</h2>
            <p class="goal-create__success-text">
              Your goal "{{ goalData.name }}" has been created successfully.
            </p>
            <button class="goal-create__btn" @click="goToDashboard">
              Go to dashboard
            </button>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Back button for steps 2-5 -->
    <div v-if="currentStep > 1 && currentStep < 6" class="goal-create__footer">
      <button class="goal-create__back" @click="prevStep">
        <span class="goal-create__back-arrow">‹</span>
        Back
      </button>
    </div>
  </div>
</template>

<style scoped>
.goal-create {
  min-height: 100dvh;
  background: linear-gradient(180deg, #f0eef7 0%, #fff 40%);
  display: flex;
  flex-direction: column;
}

/* Header */
.goal-create__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  padding-top: calc(env(safe-area-inset-top) + 16px);
}

.goal-create__logo {
  font-size: 24px;
  font-weight: 900;
  color: #1a1a2e;
  letter-spacing: -1px;
}

.goal-create__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.goal-create__icon {
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a2e;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.15s ease;
}

.goal-create__icon:active {
  opacity: 0.6;
}

/* Content */
.goal-create__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
}

.goal-create__step {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

/* Step 1: Intro */
.goal-create__intro {
  text-align: center;
  margin-bottom: 32px;
}

.goal-create__title {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a2e;
  line-height: 1.25;
  margin: 0 0 12px;
  letter-spacing: -0.5px;
}

.goal-create__subtitle {
  font-size: 16px;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.goal-create__preview {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.goal-create__preview-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.goal-create__preview-item:last-child {
  border-bottom: none;
}

.goal-create__preview-label {
  font-size: 14px;
  color: #666;
}

.goal-create__preview-value {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a2e;
}

/* Step titles */
.goal-create__step-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 8px;
  line-height: 1.3;
}

.goal-create__step-subtitle {
  font-size: 15px;
  color: #666;
  margin: 0 0 32px;
  line-height: 1.5;
}

/* Form fields */
.goal-create__field {
  margin-bottom: 20px;
}

.goal-create__label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.goal-create__input,
.goal-create__textarea {
  width: 100%;
  padding: 16px;
  border: 2px solid #e8e8ed;
  border-radius: 12px;
  font-size: 16px;
  font-family: inherit;
  background: #fff;
  transition: border-color 0.15s ease;
}

.goal-create__input:focus,
.goal-create__textarea:focus {
  outline: none;
  border-color: #f2653a;
}

.goal-create__input--date {
  font-size: 16px;
}

.goal-create__textarea {
  resize: none;
}

/* Amount field */
.goal-create__amount-field {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  border: 2px solid #e8e8ed;
  border-radius: 16px;
  padding: 16px 20px;
  margin-bottom: 32px;
  transition: border-color 0.15s ease;
}

.goal-create__amount-field:focus-within {
  border-color: #f2653a;
}

.goal-create__currency {
  font-size: 20px;
  font-weight: 600;
  color: #666;
}

.goal-create__amount-input {
  flex: 1;
  border: none;
  font-size: 32px;
  font-weight: 700;
  color: #1a1a2e;
  background: transparent;
  outline: none;
}

/* Summary */
.goal-create__recap {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.goal-create__recap-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.goal-create__recap-item:last-of-type {
  border-bottom: none;
}

.goal-create__recap-label {
  font-size: 14px;
  color: #666;
}

.goal-create__recap-value {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
}

.goal-create__recap-highlight {
  background: linear-gradient(135deg, #f2653a 0%, #fb7c5d 100%);
  border-radius: 12px;
  padding: 16px;
  margin-top: 16px;
  text-align: center;
}

.goal-create__recap-highlight-label {
  display: block;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 4px;
}

.goal-create__recap-highlight-value {
  display: block;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
}

/* Loading */
.goal-create__loading {
  text-align: center;
  padding: 48px 24px;
}

.goal-create__rocket {
  font-size: 64px;
  margin-bottom: 24px;
  animation: bounce 1s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.goal-create__loading-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 8px;
}

.goal-create__loading-text {
  font-size: 16px;
  color: #666;
  margin: 0;
}

/* Success */
.goal-create__success {
  text-align: center;
  padding: 48px 24px;
}

.goal-create__success-icon {
  font-size: 64px;
  margin-bottom: 24px;
}

.goal-create__success-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 12px;
}

.goal-create__success-text {
  font-size: 16px;
  color: #666;
  margin: 0 0 32px;
  line-height: 1.5;
}

/* Buttons */
.goal-create__btn {
  display: block;
  width: 100%;
  background: #f2653a;
  color: #fff;
  border: none;
  padding: 18px 32px;
  border-radius: 999px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.12s ease, opacity 0.12s ease;
  letter-spacing: 0.2px;
}

.goal-create__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.goal-create__btn:not(:disabled):active {
  transform: scale(0.97);
}

.goal-create__btn--secondary {
  background: #e8e8ed;
  color: #1a1a2e;
}

.goal-create__actions-row {
  display: flex;
  gap: 12px;
}

.goal-create__actions-row .goal-create__btn {
  flex: 1;
}

/* Footer */
.goal-create__footer {
  padding: 16px 24px 32px;
  display: flex;
  justify-content: center;
}

.goal-create__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #e8e8ed;
  color: #1a1a2e;
  border: none;
  padding: 14px 32px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.12s ease, opacity 0.12s ease;
}

.goal-create__back:active {
  transform: scale(0.97);
  opacity: 0.92;
}

.goal-create__back-arrow {
  font-size: 20px;
  line-height: 1;
  margin-top: -2px;
}

/* Transitions */
.step-enter-active,
.step-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.step-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.step-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
