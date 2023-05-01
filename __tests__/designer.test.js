describe("designer", () => {
    it("should move an element to a new index in the array", () => {
        let arr = [1, 2];
        arr[0 + 2] = arr[1];
        expect(arr[2]).toBe(2);
    })
});
