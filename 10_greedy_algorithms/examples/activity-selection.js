function activitySelection(activities) {
    activities.sort((a, b) => a.end - b.end);
    let selected = [activities[0]];
    let lastEnd = activities[0].end;

    for (let i = 1; i < activities.length; i++) {
        if (activities[i].start >= lastEnd) {
            selected.push(activities[i]);
            lastEnd = activities[i].end;
        }
    }

    return selected;
}

const activities = [
    {start: 1, end: 4},
    {start: 3, end: 5},
    {start: 0, end: 6},
    {start: 5, end: 7},
    {start: 8, end: 9},
    {start: 5, end: 9}
];
console.log(activitySelection(activities)); 
// Output: [{start: 1, end: 4}, {start: 5, end: 7}, {start: 8, end: 9}]
