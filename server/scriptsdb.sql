create table USERS (
   USER_ID             Serial               not null,
   USER_NICKNAME       VARCHAR(40)          not null,
   USER_NAME           VARCHAR(40)          not null,
   USER_LASTNAME       VARCHAR(40)          not null,
   USER_EMAIL          VARCHAR(50)          null,
   RANDOMSTR           VARCHAR(40)          null,
   HASH         	   VARCHAR(250)         not null,
   constraint PK_USERS primary key (USER_ID)
);