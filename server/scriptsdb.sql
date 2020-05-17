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


INSERT INTO users (user_nickname, user_name, user_lastname, user_email, randomstr, hash) values 
('Lulu', 'Virginie','Girerd', 'vivi@gmail.com', 'asdfqwer', '123456789asd');


json insomnia
{
	"user_nickname": "Lulu",
	"user_name": "Virginie",
	"user_lastname": "Girerd",
	"user_email": "vivi@gmail.com",
	"randomstr": "asdfqwer",
	"hash": "123456789asd"
}

alternativa dos
create table USERS (
   USER_ID             Serial               not null,
   USER_NICKNAME       VARCHAR(40)          null,
   USER_NAME           VARCHAR(40)          null,
   USER_LASTNAME       VARCHAR(40)          null,
   USER_EMAIL          VARCHAR(50)          null,
   RANDOMSTR           VARCHAR(40)          null,
   HASH         	   VARCHAR(250)         null,
   constraint PK_USERS primary key (USER_ID)
);


