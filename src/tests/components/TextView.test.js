import TextView from '../../components/TextView';

describe('TextView component testing', function () {
    it('renders label', function () {
        const wrapper = mount(<TextView>Hello World!</TextView>);

        expect(wrapper.find('.text-view')).to.have.length(1);
    });
});