import { reactive, toRefs, readonly, computed } from 'vue'
export default function useGameSettings () {
    const settings = reactive({
        minMaxNumbers: [0, 15],
        numNumbers: 3,
        operations: {
            "+": (x: number, y: number) => x + y,
            "-": (x: number, y: number) => x - y
        }
    })

    const operators = computed(() => Object.keys(settings.operations))

    return readonly({
        ...toRefs(settings),
        operators
    })

}