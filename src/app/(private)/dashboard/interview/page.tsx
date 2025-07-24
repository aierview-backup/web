import Card from "@/features/dashboard/pages/interview/Card";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";
import AddIcon from "@/shared/ui/icons/addLarge.svg";
import CodeReviewIcon from "@/shared/ui/icons/code-review.svg";
import Codechallenge from "@/shared/ui/icons/codechallenge.svg";
import PlayIcon from "@/shared/ui/icons/paly.svg";
import TrsahIcon from "@/shared/ui/icons/trash.svg";
import ViewIcon from "@/shared/ui/icons/view.svg";
import WhiteboardIcon from "@/shared/ui/icons/whiteboard.svg";
import styles from "./interview.module.css";

export default function Interview() {
  return (
    <div className={styles.content}>
      <div className={styles.cards}>
        <Card
          icon={<WhiteboardIcon />}
          title="Whiteboard"
          percent={50}
          pendig={100}
          complete={50}
          total={100}
        />
        <Card
          icon={<CodeReviewIcon />}
          title="Code Review"
          percent={70}
          pendig={30}
          complete={70}
          total={100}
        />
        <Card
          icon={<Codechallenge />}
          title="Code Challenge"
          percent={30}
          pendig={70}
          complete={30}
          total={100}
        />
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.searchAndAdd}>
          <Input type="search" placeholder="Search ..." />
          <Button className={styles.add} type="iconBtn" value={<AddIcon />} />
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <Input type="checkbox" />
              </th>
              <th>Type</th>
              <th>Role</th>
              <th>Level</th>
              <th>Technology</th>
              <th>Date</th>
              <th>Score</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td style={{ borderLeft: "1px solid #ff383c" }}>Whiteboard</td>
              <td>Backend</td>
              <td>Senior</td>
              <td>Java</td>
              <td>2025-07-23</td>
              <td style={{ color: "#ff383c", fontWeight: "bold" }}>40</td>
              <td style={{ color: "#34c759", fontWeight: "bold" }}>Done</td>
              <td>
                <Button
                  className={styles.view}
                  type="iconBtn"
                  value={<ViewIcon />}
                />
                <Button
                  className={styles.trash}
                  type="iconBtn"
                  value={<TrsahIcon />}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td style={{ borderLeft: "1px solid green" }}>Code Review</td>
              <td>Fullstack</td>
              <td>Mid Level</td>
              <td>.Net</td>
              <td>2025-07-23</td>
              <td style={{ color: "#34c759", fontWeight: "bold" }}>70</td>
              <td style={{ color: "#34c759", fontWeight: "bold" }}>Done</td>
              <td>
                <Button
                  className={styles.view}
                  type="iconBtn"
                  value={<ViewIcon />}
                />
                <Button
                  className={styles.trash}
                  type="iconBtn"
                  value={<TrsahIcon />}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td style={{ borderLeft: "1px solid green" }}>Whiteboard</td>
              <td>Frontend</td>
              <td>Junior</td>
              <td>React</td>
              <td>2025-07-23</td>
              <td style={{ color: "#34c759", fontWeight: "bold" }}>70</td>
              <td style={{ color: "#34c759", fontWeight: "bold" }}>Done</td>
              <td>
                <Button
                  className={styles.view}
                  type="iconBtn"
                  value={<ViewIcon />}
                />
                <Button
                  className={styles.trash}
                  type="iconBtn"
                  value={<TrsahIcon />}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td style={{ borderLeft: "1px solid red" }}>Code Challenge</td>
              <td>Mobile</td>
              <td>Mid Level</td>
              <td>React Native</td>
              <td>2025-07-23</td>
              <td style={{ color: "#ff383c", fontWeight: "bold" }}>30</td>
              <td
                style={{
                  color: "#ff383c",
                  fontWeight: "bold",
                }}
              >
                Pending
              </td>
              <td>
                <Button
                  className={styles.play}
                  type="iconBtn"
                  value={<PlayIcon />}
                />
                <Button
                  className={styles.trash}
                  type="iconBtn"
                  value={<TrsahIcon />}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Input type="checkbox" />
              </td>
              <td style={{ borderLeft: "1px solid green" }}>Code Review</td>
              <td>Backend</td>
              <td>Junior</td>
              <td>Javascrpt</td>
              <td>2025-07-23</td>
              <td style={{ color: "#34c759", fontWeight: "bold" }}>70</td>
              <td style={{ color: "#34c759", fontWeight: "bold" }}>Done</td>
              <td>
                <Button
                  className={styles.view}
                  type="iconBtn"
                  value={<ViewIcon />}
                />
                <Button
                  className={styles.trash}
                  type="iconBtn"
                  value={<TrsahIcon />}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
