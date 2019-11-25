import React from 'react'

const styles = {
    header: {
        header : "header",
        title : "header__title",
        subtitle : "header__subtitle"
    }
}

// Header Component
const Header = props => (
    <div className={styles.header.header}>
        <h1 className={styles.header.title}>{props.main}</h1>
        <h5 className={styles.header.subtitle}>{props.sub}</h5>
    </div>
)

export default Header
