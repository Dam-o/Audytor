function* subsets(array, offset = 0) {
    while (offset < array.length) {
        let first = array[offset++];
        for (let subset of subsets(array, offset)) {
            subset.push(first);
            yield subset;
        }
    }
    yield [];
};

for (let subset of subsets([1, 2, 3])) {
    console.log(subset);
};