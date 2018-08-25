import Grid from '../../components/Grid';
import TextView from '../../components/TextView';

describe('Grid component testing', function () {

    // https://sinonjs.org/releases/v6.1.5/general-setup/
    afterEach(() => {
        // Restore the default sandbox here
        sinon.restore();
    });

    it('calls onClickHandler when clicked', function () {
        var onClick = spy(Grid.prototype, 'onClickHandler');
        const wrapper = mount(<Grid onClick={onClick} />);

        wrapper.find('div').first().simulate('click');

        expect(onClick.calledOnce).to.be.true;
    });

    it('renders TextView message', function () {
        const wrapper = mount(<Grid>World!</Grid>);
        expect(wrapper.find(TextView)).to.have.length(1);

        expect(wrapper.find(TextView).text()).to.equals("Hello World!");
    });
});