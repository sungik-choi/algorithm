function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for (const i in participant) {
        if (participant[i] !== completion[i]) return participant[i];
    }
}

function solutionHash(participant, completion) {
    const hashed = []

    participant.forEach(entry => {
        hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1;
    })

    completion.forEach(entry => {
        hashed[entry] = hashed[entry] - 1;
    })

    for (const key in hashed) {
        if (hashed[key] >= 1) return key;
    }
}