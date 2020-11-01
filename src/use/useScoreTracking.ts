import { ref, computed } from 'vue'
const score = ref(0)
export default function useScoreTracking () {

    const addScore = (points: number) => {
        score.value += points
    }

    return {
        addScore,
        score: computed(() => score.value),
    }
}