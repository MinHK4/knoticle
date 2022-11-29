import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

import { getUserProfileApi, updateUserProfileApi } from '@apis/userApi';
import GNB from '@components/common/GNB';
import BookListTab from '@components/study/BookListTab';
import EditUserProfile from '@components/study/EditUserProfile';
import FAB from '@components/study/FAB';
import UserProfile from '@components/study/UserProfile';
import useFetch from '@hooks/useFetch';
import { IUser } from '@interfaces';
import { PageInnerLarge, PageWrapper } from '@styles/layout';

export default function Study() {
  const router = useRouter();
  const { data: userProfile, execute: getUserProfile } = useFetch(getUserProfileApi);
  const { execute: updateUserProfile } = useFetch(updateUserProfileApi);
  const [curUserProfile, setCurUserProfile] = useState<IUser | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEditFinishBtnClick = () => {
    setIsEditing(false);
    updateUserProfile(curUserProfile);
  };

  useEffect(() => {
    if (!router.query.data) return;

    const nickname = router.query.data;
    getUserProfile(nickname);
  }, [router.query.data]);

  useEffect(() => {
    if (!userProfile) return;

    setCurUserProfile({
      ...userProfile,
    });
  }, [userProfile]);

  return (
    <>
      <GNB />
      {curUserProfile && (
        <PageWrapper>
          <PageInnerLarge>
            {isEditing ? (
              <EditUserProfile
                handleEditFinishBtnClick={handleEditFinishBtnClick}
                curUserProfile={curUserProfile}
                setCurUserProfile={setCurUserProfile}
              />
            ) : (
              <UserProfile
                curUserProfile={curUserProfile}
                handleEditBtnClick={() => {
                  setIsEditing(true);
                }}
              />
            )}
            <BookListTab />
          </PageInnerLarge>
          <FAB />
        </PageWrapper>
      )}
    </>
  );
}
