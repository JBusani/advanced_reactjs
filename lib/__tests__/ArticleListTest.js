import React from 'react';
import ArticleList from '../components/ArticleList';
import renderer from 'react-test-renderer';

describe('ArticleList', () => {

    const testProps = {
        articles: {
            a: { id: 'a'},
            b: { id : 'b'},
        },
        articleActions: {
            lookupAuthor: jest.fn(() => ({})),
        }
    }

    it( 'renders correctly', () => {
        const tree = renderer.create(
            <ArticleList
                {...testProps} />
        ).toJSON();

        console.log(tree);
    });
});

//toJson looks much better in console and we can see it like a tree