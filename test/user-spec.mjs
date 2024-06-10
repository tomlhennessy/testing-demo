
describe('User class', function() {
    let expect;
    let User;

    before(async function() {
        // Dynamically import chai and User class
        const chai = await import('chai');
        expect = chai.expect;
        User = (await import('../class/user.mjs')).default;
    });

    it('should create successfully', function() {
        let user = new User();
        expect(user).to.exist;
    });

    it('should set username on creation', function() {
        let user = new User("john_doe");
        expect(user.username).to.equal("john_doe");
    });
});
