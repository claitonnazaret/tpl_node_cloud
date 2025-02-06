"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
it('should sum', () => {
    const person = new server_1.default();
    expect(person.sayMyName()).toBe('Claiton');
});
