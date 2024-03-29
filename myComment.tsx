import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCommentsLists } from "../../api/profile";
import { getDateNotation } from "../../utils/common";
import { ReactComponent as Nodata } from "../../assets/images/login_signup_profile/icon_no_data.svg";

interface Props {
  commentList: myComment[];
}

type myComment = {
  id: number;
  content: string;
  createdAt: string;
  postId: number;
}

const ListComments = ({ commentList }: Props) => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    // Navigate to the desired page when the button is clicked
    navigate(`/profile/${userId}/comments`);
  };

  const handleCommentClick = (postId: number) => {
    // 댓글을 클릭했을 때 해당 댓글의 상세 페이지로 이동
    navigate(`/detail/${postId}`);
  };


  return (
    <InnerContainer>
      <Post>
        <H3>나의 댓글 모아보기</H3>
        {commentList.length === 0 ? (
 null
) : (  <Bt onClick={handleViewAllClick}>{`전체보기`}</Bt>
  // 또는 아무 내용도 없는 <></> 사용
)}
        
      </Post>
     
        {commentList.length === 0 ? (
          <Pple>
          <StNodata/>
                    <NoDataMessage>아직 댓글을 작성하지 않으셨습니다!
  
  </NoDataMessage>
                    </Pple>
        ) : (
          <CommentList>
          <List>
          <CardList>
            {commentList.map((item) => (
              <CommentListItem key={item.id} onClick={() => handleCommentClick(item.postId)}>
                <Content>{item.content}</Content>
                <Date>{getDateNotation(item.createdAt)}</Date>
              </CommentListItem>
            ))}
          </CardList>
          </List>
       
      </CommentList>
       )}
    </InnerContainer>
  );
};

export default ListComments;

const Pple = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #252427;
  padding-top: 24px;
  padding-bottom: 24px;
  border-radius: 8px;
`;
const StNodata = styled(Nodata)`
width: 50px; /* 원하는 크기로 조정 */
  height: 58px; /* 원하는 크기로 조정 */
`;

const NoDataMessage = styled.p`
padding-top: 10px;
  font-size: 16px;
  color: #8E8D92;
  text-align: center; /* 가운데 정렬을 추가 */
`;


const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  padding-top: 52px;
  gap: 20px;
`;

const Post = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H3 = styled.h3`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: #e7e6f0;
`;

const Bt = styled.div`
  font-size: 14px;
  font-family: "Pretendard";
  color: #e7e6f0;
  cursor: pointer;
`;

const List = styled.div`
`;

const CommentList = styled.div`
  display: block;
  cursor: pointer;
  overflow-x: auto; /* 가로 스크롤 가능한 영역으로 설정 */
  white-space: nowrap; /* 줄바꿈을 방지하여 가로로 나열되도록 설정 */

  &::-webkit-scrollbar {
    height: 4px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dddddd;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #3a3a3a;
    border-radius: 10px;
  }

`;

const CardList = styled.div`
  display: inline-block; /* 가로로 나열하기 위해 inline-block 설정 */
  vertical-align: top; /* 가로 정렬을 위해 top 설정 */
  padding-bottom: 10px;
  margin-right: -10px;
  
`;

const CommentListItem = styled.li`
  display: inline-block; /* 가로로 나열하기 위해 inline-block 설정 */
  width: 256px;
  border-radius: 6px;
  border: 1px solid #524d58;
  background-color: #434047;
  padding: 18px 14px;
  margin-right: 12px;
  cursor: pointer;
  box-sizing: border-box; /* padding을 요소의 크기에 포함시키도록 설정 */
`;

const Content = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #fafafa;
  overflow: hidden; /* Hide overflowing content */
  text-overflow: ellipsis; /* Show ellipsis when text overflows */
  white-space: nowrap; /* Prevent wrapping */
`;

const Date = styled.div`
  font-size: 14px;
  color: #a6a3af;
  font-weight: 500;
  padding-top: 10px;
`;
