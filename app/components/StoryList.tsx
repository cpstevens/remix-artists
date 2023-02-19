import { NewsAPI_Story } from "~/services/newsApi.server";
import {
  storyListContainerStyles,
  storyListItemContainer,
  storyListItemContents,
  storyListItemHeader,
  storyListItemInformation,
  storyListLinkStyles,
} from "~/styles/components/storyList.css";

interface StoryListProps {
  stories: NewsAPI_Story[];
}

export const StoryList: React.FC<StoryListProps> = ({ stories }) => {
  return (
    <ul className={storyListContainerStyles}>
      {stories.map((story) => (
        <li className={storyListItemContainer} key={story.title}>
          <div className={storyListItemContents}>
            <div className={storyListItemInformation}>
              <p className={storyListItemHeader}>
                <a className={storyListLinkStyles} href={story.url} target="_blank">{story.title}</a>
              </p>
              <p>{story.description}</p>
            </div>
            <img src={story.urlToImage} alt={story.title} height={100} />
          </div>
        </li>
      ))}
    </ul>
  );
};
