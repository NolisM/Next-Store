'use client';
// import { useChat } from 'ai/react';
import styles from './Chat.module.sass';

// export const Chat = (props: { agent: string }) => {
//     const { messages, input, handleInputChange, handleSubmit } = useChat({
//         initialMessages: [
//             {
//                 id: '1',
//                 role: 'system',
//                 content: props.agent
//             }
//         ],
//     });

//     return (
//         <main className={styles.Chat} >
//             <h1 className={styles.Chat__title}>Ask anything, buy everything</h1>
//             <form onSubmit={handleSubmit} className={styles.Chat__form}>
//                 <input
//                     className={styles.Chat__input}
//                     value={input}
//                     onChange={handleInputChange}
//                     placeholder="What would you like to buy?"
//                 />
//                 <button
//                     className={styles.Chat__button}
//                 >
//                     Send
//                 </button>
//             </form>
//             <section className={styles.Chat__messages}>
//                 {messages
//                     .filter(m => m.role !== 'system')
//                     .map(m => {
//                         return (
//                             <span key={m.id} className={styles.Chat__message}>
//                                 <div className={styles.Chat__message__icon}>
//                                     {m.role === "assistant" ? "🤖" : "😊"}
//                                 </div>
//                                 <div>
//                                     {m.content}
//                                 </div>
//                             </span>
//                         )
//                     }

//                     )}
//             </section>
//         </main>
//     );
// }



import { useChat } from 'ai/react'

export default function Chat(props: { agent: string }) {
    const { messages, input, handleInputChange, handleSubmit } = useChat(
        {
            initialMessages: [
                {
                    id: '1',
                    role: 'system',
                    content: props.agent
                }
            ],
        }
    )

    return (
        <div className={styles.Chat}>
            {messages.filter(m => m.role !== 'system')
                .map(m => {
                    return (
                        <span key={m.id} className={styles.Chat__message}>
                            <div className={styles.Chat__message__icon}>
                                {m.role === "assistant" ? "🤖" : "😊"}
                            </div>
                            <div>
                                {m.content}
                            </div>
                        </span>
                    )
                })}

            <h1 className={styles.Chat__title}>Ask anything, buy everything</h1>
            <form onSubmit={handleSubmit} className={styles.Chat__form}>
                <input
                    className={styles.Chat__input}
                    value={input}
                    onChange={handleInputChange}
                    placeholder="What would you like to buy?"
                />
                <button
                    className={styles.Chat__button}
                >
                    Send
                </button>
            </form>
        </div>
    )
}