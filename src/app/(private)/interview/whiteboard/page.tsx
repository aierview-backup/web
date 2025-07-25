import Textarea from "@/shared/ui/components/Textarea";
import styles from "./whiteboard.module.css";

export default function Whiteboard() {
    return (
        <div className={styles.container}>
            <h2>
                1. How would you implement a user authentication feature in a REST API?
                Describe the main steps, the technologies you would use, and the
                security best practices you&rsquo;d follow.
            </h2>

            <Textarea/>
        </div>
    );
}
