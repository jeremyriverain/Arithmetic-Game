import { reactive, toRefs, readonly, computed } from 'vue'

const settings = reactive({
    minMaxNumbers: [0, 15],
    numberOfOperands: 3,
    operators: ['+', '-'],
    maxResolutionTime: 10,
    winningScore: 50
})

export default function useGameSettings () {

    return readonly({
        ...toRefs(settings)
    })

}