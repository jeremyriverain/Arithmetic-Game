import { ref, computed } from 'vue'
import { useGameSettings } from '@/use/useGameSettings'

const { healthPoints: initialHealthPoints } = useGameSettings()
const healthPoints = ref(initialHealthPoints.value)

export default function useHealthTracking () {


    const loseHealth = (points: number = 1) => {
        const remainingHealth = healthPoints.value - points
        if (remainingHealth <= 0) {
            healthPoints.value = 0
        } else {
            healthPoints.value -= points
        }
    }

    const resetHealth = () => {
        healthPoints.value = initialHealthPoints.value
        console.log('reset health', healthPoints.value);
    }

    return {
        loseHealth,
        healthPoints: computed(() => healthPoints.value),
        resetHealth
    }
}