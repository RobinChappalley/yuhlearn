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
        src="/illustrations/People.png"
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
  background: linear-gradient(180deg, #edf3f7 0%, #fdf8fc 60%, #fff 100%);
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: calc(env(safe-area-inset-top) + 16px);
  padding-bottom: calc(env(safe-area-inset-bottom) + 32px);
}

/* Header */
.onboarding__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  padding: 12px 20px;
  background: #fff;
  border-radius: 999px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.onboarding__logo {
  font-size: 24px;
  font-weight: 900;
  color: #111;
  letter-spacing: -1px;
}

.onboarding__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.onboarding__lang {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.onboarding__flag {
  font-size: 20px;
  line-height: 1;
}

.onboarding__chevron {
  font-size: 10px;
  color: #999;
}

.onboarding__menu {
  display: flex;
  flex-direction: column;
  gap: 3.5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.onboarding__menu span {
  display: block;
  width: 20px;
  height: 2px;
  background: #222;
  border-radius: 2px;
}

/* Illustration */
.onboarding__illustration {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 32px;
}

.onboarding__img {
  max-width: 100%;
  max-height: 55dvh;
  object-fit: contain;
}

/* Content */
.onboarding__content {
  padding: 0 32px 16px;
}

.onboarding__label {
  font-size: 13px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 10px;
  letter-spacing: 0.2px;
}

.onboarding__title {
  font-size: 34px;
  font-weight: 800;
  color: #111;
  line-height: 1.18;
  margin: 0 0 36px;
  letter-spacing: -0.8px;
  max-width: 340px;
}

.onboarding__highlight {
  color: #f2653a;
}

.onboarding__btn {
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

.onboarding__btn:active {
  transform: scale(0.97);
  opacity: 0.92;
}
</style>
