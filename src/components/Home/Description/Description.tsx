import styles from './Description.module.sass'

export const Description=()=>{
    return(
        <section className={styles.Description}>
            <img src="/images/description.jpg" alt="production marketplace" />
            <div className={styles.Description__text}>
                <h2>Description</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit obcaecati odit enim autem quo molestias harum facilis rem, consectetur aut quisquam, beatae alias atque, vitae id. Nihil rem impedit eaque!</p>

            </div>
        </section>
    )
}