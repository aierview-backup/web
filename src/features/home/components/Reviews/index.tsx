import StarsIcon from "@/shared/ui/icons/stars.svg";
import Image from "next/image";
import styles from "./reviews.module.css";

const reviews = [
    {
        text: "AIERVIEW helped me gain confidence in technical interviews. I practiced with real challenges and received feedback that made all the difference. I landed the job I always wanted!",
        name: "Gervásio Dombo",
        image: "/img/profile.jpeg",
    },
    {
        text: "AIERVIEW gave me structure and confidence. I stopped feeling lost and started performing better in every interview round. It's like having a coach on demand.",
        name: "Aline Rocha",
        image: "/img/profile.jpeg",
    },
    {
        text: "Practicing with AIERVIEW prepared me better than any other platform. I got valuable feedback and landed multiple job offers in just weeks!",
        name: "Carlos Menezes",
        image: "/img/profile.jpeg",
    },
];

export default function Reviews() {
    return (
        <section id="reviews" className={styles.review}>
            <h1>⭐ Success Stories</h1>
            <p>
                Get inspired by real stories from people who practiced with our AI and
                succeeded in job interviews.
            </p>

            <div className={styles.cards}>
                {reviews.map(({text, name, image}, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.stars}>
                            {Array(5)
                                .fill(null)
                                .map((_, i) => (
                                    <StarsIcon key={i}/>
                                ))}
                        </div>
                        <span>{text}</span>
                        <div className={styles.profile}>
                            <Image
                                src={image}
                                width={45}
                                height={45}
                                alt={`${name}'s profile`}
                            />
                            <span>{name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
