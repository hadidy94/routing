import { Fragment } from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Components from '../components/comments/Comments';
import HighLightQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Ahmed', text: 'Learning new data' },
    { id: 'q2', author: 'Adel', text: 'new blog' },
]

const QuoteDetail = () => {
    const id = useParams();
    const match = useRouteMatch();

    const quote = DUMMY_QUOTES.find(quote => quote.id === id.quoteId);

    if (!quote) {
        return <p>No quote found!</p>
    }

    return (
        <Fragment>
            <HighLightQuote text={quote.text} author={quote.author} />
            <Route path={match.url} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.url}/comments`}>
                <Components />
            </Route>

        </Fragment>
    );
}
export default QuoteDetail;