<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function start() {
  localStorage.setItem('yuhlearn_onboarding_seen', 'true')
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="onboarding">
    <!-- Header -->
    <header class="onboarding__header">
      <div class="onboarding__logo">yuh</div>
      <div class="onboarding__actions">
        <button class="onboarding__lang">
          <span class="onboarding__flag">🇬🇧</span>
          <span class="onboarding__chevron">▼</span>
        </button>
        <button class="onboarding__menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <!-- Illustration -->
    <div class="onboarding__illustration">
      <img
        src="/illustrations/Abstract_09a.png"
        alt="Person using phone"
        class="onboarding__img"
      />
    </div>

    <!-- Content -->
    <div class="onboarding__content">
      <p class="onboarding__label">YuhLearn</p>
      <h1 class="onboarding__title">
        Get a grip on your <span class="onboarding__highlight">finances</span> to reach your goals.
      </h1>

      <button class="onboarding__btn" @click="start">
        Start
      </button>
    </div>
  </div>
</template>

<style scoped>
.onboarding {
  min-height: 100dvh;
  background: linear-gradient(180deg, #eef5f8 0%, #f8f4f8 100%);
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: calc(env(safe-area-inset-top) + 12px);
  padding-bottom: calc(env(safe-area-inset-bottom) + 24px);
}

/* Header */
.onboarding__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 16px;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-radius: 99px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
}

.onboarding__logo {
  font-size: 22px;
  font-weight: 800;
  color: #1a1a2e;
  letter-spacing: -0.5px;
}

.onboarding__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.onboarding__lang {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.onboarding__flag {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  object-fit: cover;
}

.onboarding__chevron {
  font-size: 10px;
  color: #888;
}

.onboarding__menu {
  display: flex;
  flex-direction: column;
  gap: 3px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.onboarding__menu span {
  display: block;
  width: 18px;
  height: 2px;
  background: #333;
  border-radius: 2px;
}

/* Illustration */
.onboarding__illustration {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.onboarding__img {
  max-width: 100%;
  max-height: 50dvh;
  object-fit: contain;
}

/* Content */
.onboarding__content {
  padding: 0 32px 24px;
}

.onboarding__label {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 12px;
}

.onboarding__title {
  font-size: 32px;
  font-weight: 800;
  color: #1a1a2e;
  line-height: 1.2;
  margin: 0 0 32px;
  letter-spacing: -0.5px;
}

.onboarding__highlight {
  color: #f2653a;
}

.onboarding__btn {
  display: block;
  width: 100%;
  max-width: 280px;
  background: #f2653a;
  color: #fff;
  border: none;
  padding: 16px 32px;
  border-radius: 99px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.onboarding__btn:active {
  transform: scale(0.97);
  opacity: 0.9;
}
</style>
