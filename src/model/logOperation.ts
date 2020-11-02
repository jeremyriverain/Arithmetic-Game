import { v4 as uuidv4 } from 'uuid';

export default class LogOperation {

    private message: string = ''

    private uuid: string;

    constructor(private operationNodes: (string | number)[], private submittedNumber: number | null, private expectedResult: number) {
        this.uuid = uuidv4()
    }

    getOperationNodes () {
        return this.operationNodes
    }

    getSubmittedNumber () {
        return this.submittedNumber
    }

    getExpectedResult () {
        return this.expectedResult
    }

    getMessage () {
        return this.message
    }

    setMessage (message: string) {
        this.message = message
    }

    getId () {
        return this.uuid
    }

}