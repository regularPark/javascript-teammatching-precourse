const MSG = {
  START: "우테코 크루와 팀 매칭 관리 보드",
  CREW_MSG: "\n크루를 관리할 코스를 선택해주세요(F/B)\n",
  CREW_NAME_MSG: "\n추가할 크루의 이름을 입력해주세요.\n",
};

const ERR_MSG = {
  MENU_ERR: "[ERROR] F/B 중 하나를 입력해주세요.",
  MENU_LEN_ERR: "[ERROR] F/B 중 한 글자를 입력해주세요.",
  LENGTH_ERR: "[ERROR] 이름의 길이는 5글자 이하여야 합니다.",
  DUP_ERR: "[ERROR] 같은 이름의 크루가 존재합니다.",
};

module.exports = {
  MSG,
  ERR_MSG,
};
