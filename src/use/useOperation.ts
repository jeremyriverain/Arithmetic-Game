import { random } from '@/lib/lib'
import useGameSettings from './useGameSettings'
const { minMaxNumbers, numNumbers, operators, operations } = useGameSettings();

export default function useOperation () {

    const makeOperation = (): (string | number)[] => {
        const iterations = numNumbers * 2 - 1;
        let res = [];
        for (let i = 0; i < iterations; i++) {
            if (i % 2 === 0) {
                // number case
                res.push(random(minMaxNumbers[0], minMaxNumbers[1]));
            } else {
                // operator case
                res.push(operators[random(0, operators.length - 1)]);
            }
        }

        return res; // return array. odd indexes are numbers, even indexes are operators between numbers
    };

    const isValidOperation = (operationNodes: []): boolean => {
        const lengthOperation = operationNodes.length
        if (!lengthOperation) {
            console.error('operation is empty')
            return false
        }

        if (lengthOperation % 2 === 0) {
            console.error(`operation should have an odd length, ${lengthOperation} nodes provided`)
            return false
        }

        const evenIndexesAreNumbers = operationNodes.filter((node, i) => i % 2 === 0).every(node => Number.isInteger(node))
        if (!evenIndexesAreNumbers) {
            console.error('operation not valid because even indexes should contain only integers')
            return false
        }

        const oddIndexesAreOperators = operationNodes.filter((node, i) => i % 2 !== 0).every(node => operators.includes(node))
        if (!oddIndexesAreOperators) {
            console.error('operation not valid because odd indexes should contain only operators')
            return false
        }

        return true
    }

    const getResult = (operationNodes: []): number => {
        if (!isValidOperation(operationNodes)) {
            throw "Operation is not valid";
        }

        return eval(operationNodes.join(' ')); // TODO: replace it by a real algorithm
    };

    return {
        getResult,
        isValidOperation,
        makeOperation
    }
}