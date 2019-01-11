import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "babel-polyfill";

enzyme.configure({ adapter: new Adapter() });

global.___loader = {
  enqueue: jest.fn()
};

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
