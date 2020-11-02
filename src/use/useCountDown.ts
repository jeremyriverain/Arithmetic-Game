import { watch, ref, computed } from 'vue'
import useGameState from './useGameState'
import useGameSettings from './useGameSettings'

const { maxResolutionTime } = useGameSettings();

const countDown = ref(maxResolutionTime);
const interval = ref(0);


export default function useCountDown () {

    const reset = () => {
        countDown.value = maxResolutionTime
    }

    const start = () => {
        if (interval.value) { // cleanup previous interval
            clearInterval(interval.value)
        }

        interval.value = setInterval(() => {
            if (countDown.value <= 0) {
                console.log('0', countDown.value);
                return
            }
            countDown.value--;
        }, 1000);
    }

    const pause = () => {
        if (!interval.value) {
            return
        }
        clearInterval(interval.value)
    }

    return {
        reset,
        start,
        pause,
        countDown: computed(() => countDown.value),
    };
}