var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

import {Search} from 'Search';

describe('Search', () => {
    it('should exist', () => {
        expect(Search).toExist();
    });

    it('should dispatch SET_SEARCH_TEXT with entered input text', () => {
        var searchInput = 'Cat';
        var action = {
          type: 'SET_SEARCH_TEXT',
          searchText: searchInput
        };
        var spy = expect.createSpy();
        var search = TestUtils.renderIntoDocument(<Search dispatch={spy} />);

        search.refs.searchText.value = searchInput;
        TestUtils.Simulate.change(search.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
        var spy = expect.createSpy();
        var action = {
          type: 'TOGGLE_SHOW_COMPLETED'
        };
        var search = TestUtils.renderIntoDocument(<Search dispatch={spy} />);

        search.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(search.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action);
    });
});
