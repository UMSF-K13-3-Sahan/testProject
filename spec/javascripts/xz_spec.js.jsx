var TestUtils = React.addons.TestUtils;
var ListUsers = [
    {
        id: 1,
        fname: 'Darth',
        lname: 'Wader',
        age: '322'
    }
];
var ListClasses = [
    {
        id: 1,
        name: 'Class1',
    }
];
describe('Users component', function() {
    var users;

    beforeEach(()=>{
        users =   TestUtils.renderIntoDocument(<Users array={ListUsers}/>);
    });

    it('Render ', function() {
        expect(ReactDOM.findDOMNode(users)).toBeDefined();
    });
    it('String constants', function () {
        users_inputs = TestUtils.scryRenderedDOMComponentsWithTag(users, 'input');
        expect(users_inputs[0].placeholder).toContain('name');
        expect(users_inputs[1].placeholder).toContain('last name');
        expect(users_inputs[2].placeholder).toContain('age');
        expect(TestUtils.findRenderedDOMComponentWithTag(users, 'button').textContent).toContain('Add');
    });
    it('display the user',function () {
        var user_divs = TestUtils.findRenderedDOMComponentWithClass(users, 'contact-info');
        var user_divs = user_divs.children;
        expect(user_divs[0].textContent).toContain('Darth');
        expect(user_divs[1].textContent).toContain('Wader');
        expect(user_divs[2].textContent).toContain('322');
        expect(user_divs[3].textContent).toContain('1');
    });
    it('click to crosses',function () {
        var usersCrossSpy = jasmine.createSpy();
        usersCrossSpy(users, 'handlerDelete');
        expect(usersCrossSpy).toHaveBeenCalled();
    });
    afterEach(()=>{
        ReactDOM.unmountComponentAtNode(document.body);
    })
});

describe('Classes component', function () {
    var classes;
    beforeEach(()=>{
        classes = TestUtils.renderIntoDocument(<Classes array={ListClasses}/>);
    });
    it('Render ', function() {
        expect(ReactDOM.findDOMNode(classes)).toBeDefined();
    });

    it('String constants', function () {
        expect(TestUtils.findRenderedDOMComponentWithTag(classes, 'input').placeholder).toContain('name');
        expect(TestUtils.findRenderedDOMComponentWithTag(classes, 'button').textContent).toContain('Add');
    });

    it('display the class',function () {
        expect(TestUtils.findRenderedDOMComponentWithClass(classes, 'contact-name').textContent).toContain('Class1');
        expect(TestUtils.findRenderedDOMComponentWithClass(classes, 'models-id').textContent).toContain('1');
    });

    it('click to crosses',function () {
        var usersCrossSpy = jasmine.createSpy();
        usersCrossSpy(classes, 'handlerDelete');
        expect(usersCrossSpy).toHaveBeenCalled();
    });

    afterEach(()=>{
        ReactDOM.unmountComponentAtNode(document.body);
    })
});

describe('user', function () {
    var clas;
    beforeEach(()=>{
        clas = TestUtils.renderIntoDocument(<Class item={ListClasses[0]}/>);
    });
    it('render',function () {
        expect(ReactDOM.findDOMNode(clas)).toBeDefined();
    });
    it('show', function () {
       expect(clas.state.show).not.toBeTruthy();
       var li = TestUtils.findRenderedDOMComponentWithTag(clas, 'li');
       TestUtils.Simulate.click(li);
       expect(clas.state.show).toBeTruthy();
    });
    afterEach(()=>{
        ReactDOM.unmountComponentAtNode(document.body);
    })
});


describe('Users component', function() {
    var users;

    beforeEach(()=>{
        users =   TestUtils.renderIntoDocument(<UsersInClass array={ListUsers}/>);
    });

    it('Render ', function() {
        expect(ReactDOM.findDOMNode(users)).toBeDefined();
    });
    it('String constants', function () {
        users_inputs = TestUtils.scryRenderedDOMComponentsWithTag(users, 'input');
        expect(users_inputs[0].placeholder).toContain(I18n.t('ph.time'));
        expect(users_inputs[1].placeholder).toContain(I18n.t('ph.id'));
        expect(TestUtils.findRenderedDOMComponentWithTag(users, 'button').textContent).toContain('Add');
    });
    it('click to crosses',function () {
        var usersCrossSpy = jasmine.createSpy();
        usersCrossSpy(users, 'handlerDelete');
        expect(usersCrossSpy).toHaveBeenCalled();
    });
    afterEach(()=>{
        ReactDOM.unmountComponentAtNode(document.body);
    })
});

