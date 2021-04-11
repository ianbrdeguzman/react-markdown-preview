import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

function App() {
    const [markdown, setMarkdown] = useState('# markdown preview');
    return (
        <main>
            <section className='markdown'>
                <textarea
                    name='markdown'
                    id='markdown'
                    className='input'
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                >
                    {markdown}
                </textarea>
                <article className='result'>
                    <ReactMarkdown plugins={[gfm]}>{markdown}</ReactMarkdown>
                </article>
                <button
                    onClick={() => {
                        navigator.clipboard.writeText(markdown);
                    }}
                >
                    Copy
                </button>
            </section>
        </main>
    );
}

export default App;
