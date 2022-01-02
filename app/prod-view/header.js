function Header() {
    return React.createElement(
        'nav',
        { className: 'title' },
        React.createElement(
            'h1',
            null,
            'Unsplash 100 label classifier by Souvik Roy'
        ),
        React.createElement(
            'span',
            { className: 'roysLinkedIn' },
            React.createElement(
                'a',
                { href: 'https://www.linkedin.com/in/souvik-roy-975193186/', target: '_blank' },
                '@roysouvik'
            )
        )
    );
}