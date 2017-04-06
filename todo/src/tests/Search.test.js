var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Search = require('Search');

describe('Search', () => {
    it('should exist', () => {
        expect(Search).toExist();
    });

    it('should call onSearch with entered input text', () => {
        var searchInput = 'Cat';
        var spy = expect.createSpy();
        var search = TestUtils.renderIntoDocument(<Search onSearch={spy} />);

        search.refs.searchText.value = searchInput;
        TestUtils.Simulate.change(search.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, searchInput);
    });

    it('should call onSearch with proper checked value', () => {
        var spy = expect.createSpy();
        var search = TestUtils.renderIntoDocument(<Search onSearch={spy} />);

        search.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(search.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });
});
