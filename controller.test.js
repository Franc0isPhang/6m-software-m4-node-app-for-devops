const targetFn = require("./controller");

describe("the print function", ()=>{

    // standard best practice
    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it("should respond with 'Hello world!'", ()=>{
        const mockReq = {};
        const mockRes = {
            send:jest.fn()
        }

        targetFn(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalledWith("Hello world!!"); // If you change this value, the test will fail.
    })
})

//if the response is not in, the test would fail
//the ci pipeline would allow us to automate the testing instead of test fail test fail.
//https://www.tutorialspoint.com/pytest/pytest_introduction.htm#:~:text=Advantages%20of%20Pytest&text=Pytest%20can%20run%20multiple%20tests,of%20the%20tests%20during%20execution.
//devops starts when u do code changes and when releases have completed and they use end to end testing for user stories
// if this is automated, the QA team can do it automatically.
//when we do integration test, we test it seperately.
//QA do it in a higher environment. When u are deploying to production, QA testing is used to test on a functional lvl.
//CI CD u need to have the item in the environment in order to test it.
