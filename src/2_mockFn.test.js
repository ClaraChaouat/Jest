// Your tests here...
// You'll practice the basics of jest mocks
import { guardPower } from "./2_mockFn";

describe("guardPower()", () => {
  it("should return cb(power) if power is less than 500", () => {
    const mockCb = jest.fn();
    const number = 3;
    const power = 27;
    guardPower(mockCb, number);
    expect(mockCb).toHaveBeenCalled();
    expect(mockCb).toHaveBeenCalledWith(power);
  });

  it("should throw an error if power is greater than 500", () => {
    const mockCb = jest.fn();
    const number = 65;
    const power = 274625;
    expect(() => guardPower(mockCb, number)).toThrow(`The power of ${number} is bigger than 500...`);
    expect(mockCb).not.toHaveBeenCalled();
  });
});
