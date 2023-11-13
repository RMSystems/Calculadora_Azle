import { Canister, query, update, nat, Void } from 'azle';

let currentResult: bigint = 0n;

export default Canister({
    Resultado: query([], nat, () => {
        return currentResult;
    }),

    Adicion: update([nat], Void, (num) => {
        currentResult += BigInt(num);
    }),

    Sustraccion: update([nat], Void, (num) => {
        currentResult -= BigInt(num);
    }),

    Multiplicacion: update([nat], Void, (num) => {
        currentResult *= BigInt(num);
    }),

    Division: update([nat], Void, (num) => {
        if (num !== 0n) {
            currentResult /= BigInt(num);
        } else {
            throw new Error('Error: Division by zero');
        }
    }),

    Reset: update([], Void, () => {
        currentResult = 0n;
    }),
});