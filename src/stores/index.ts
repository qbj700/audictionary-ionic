import { reactive } from "@vue/reactivity";
import { inject, computed } from "vue";
import * as Util from '../utils/';
import { GlobalState } from '@/types'

export const globalStateSymbol = Symbol('globalState');

const authKey = Util.toStringOrNull(localStorage.getItem("authKey"))
const loginedMemberId = Util.toIntOrNull(localStorage.getItem("loginedMemberId"))
const regDate = Util.toStringOrNull(localStorage.getItem("regDate"))
const updateDate = Util.toStringOrNull(localStorage.getItem("updateDate"))
const loginedMemberName = Util.toStringOrNull(localStorage.getItem("loginedMemberName"))
const loginedMemberNickName = Util.toStringOrNull(localStorage.getItem("loginedMemberNickName"))
const loginedMemberLoginId = Util.toStringOrNull(localStorage.getItem("loginedMemberLoginId"))
const loginedMemberCellphoneNo = Util.toStringOrNull(localStorage.getItem("loginedMemberCellphoneNo"))
const loginedMemberEngName = Util.toStringOrNull(localStorage.getItem("loginedMemberEngName"))
const loginedMemberGender = Util.toStringOrNull(localStorage.getItem("loginedMemberGender"))
const loginedMemberRegNumber = Util.toStringOrNull(localStorage.getItem("loginedMemberRegNumber"))
const loginedMemberAddress = Util.toStringOrNull(localStorage.getItem("loginedMemberAddress"))
const loginedMemberFeet = Util.toIntOrNull(localStorage.getItem("loginedMemberFeet"))
const loginedMemberWeight = Util.toIntOrNull(localStorage.getItem("loginedMemberWeight"))
const loginedMemberSkinTone = Util.toStringOrNull(localStorage.getItem("loginedMemberSkinTone"))
const loginedMemberEyelid = Util.toIntOrNull(localStorage.getItem("loginedMemberEyelid"))
const loginedMemberFeature = Util.toStringOrNull(localStorage.getItem("loginedMemberFeature"))
const loginedMemberFilmgraphy = Util.toStringOrNull(localStorage.getItem("loginedMemberFilmgraphy"))
const loginedMemberJobArea = Util.toStringOrNull(localStorage.getItem("loginedMemberJobArea"))
const loginedMemberCorp = Util.toStringOrNull(localStorage.getItem("loginedMemberCorp"))
const loginedMemberAuthLevel = Util.toIntOrNull(localStorage.getItem("loginedMemberAuthLevel"))

export const createGlobalState = (): GlobalState => {
  return reactive({
    loginedMember: {
      id:loginedMemberId,
      regDate:regDate,
      updateDate:updateDate,

      authKey:authKey,
      loginId:loginedMemberLoginId,
      name:loginedMemberName,
      nickName:loginedMemberNickName,
      engName:loginedMemberEngName,
      gender:loginedMemberGender,
      regNumber:loginedMemberRegNumber,
      address:loginedMemberAddress,
      cellphoneNo:loginedMemberCellphoneNo,
      feet:loginedMemberFeet,
      weight:loginedMemberWeight,
      skinTone:loginedMemberSkinTone,
      eyelid:loginedMemberEyelid,
      feature:loginedMemberFeature,
      filmgraphy:loginedMemberFilmgraphy,
      jobArea:loginedMemberJobArea,
      corp:loginedMemberCorp,
      authLevel:loginedMemberAuthLevel
    },
    isLogined: computed(() => loginedMemberId !== null ),
    logout: () => {
      localStorage.removeItem("authKey");
      localStorage.removeItem("loginedMemberId");
      localStorage.removeItem("regDate");
      localStorage.removeItem("updateDate");
      localStorage.removeItem("loginedMemberLoginId");
      localStorage.removeItem("loginedMemberName");
      localStorage.removeItem("loginedMemberNickName");
      localStorage.removeItem("loginedMemberCellphoneNo");
      localStorage.removeItem("loginedMemberEngName")
      localStorage.removeItem("loginedMemberGender")
      localStorage.removeItem("loginedMemberRegNumber")
      localStorage.removeItem("loginedMemberAddress")
      localStorage.removeItem("loginedMemberFeet")
      localStorage.removeItem("loginedMemberWeight")
      localStorage.removeItem("loginedMemberSkinTone")
      localStorage.removeItem("loginedMemberEyelid")
      localStorage.removeItem("loginedMemberFeature")
      localStorage.removeItem("loginedMemberFilmgraphy")
      localStorage.removeItem("loginedMemberJobArea")
      localStorage.removeItem("loginedMemberCorp")
      localStorage.removeItem("loginedMemberAuthLevel")
  
      location.replace('/member/login');
    }
  });
};

export const useGlobalState = (): GlobalState => inject(globalStateSymbol) as GlobalState;

export const useGlobalStateOutSideOfVue = createGlobalState;