import { ref, computed } from 'vue'
const score = ref(0)
export default function useScoreTracking () {

    const addScore = (points: number) => {
        score.value += points
    }

    const resetScore = () => {
        score.value = 0
    }

    return {
        addScore,
        score: computed(() => score.value),
    }
}