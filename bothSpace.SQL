create database bothSpace;

use bothSpace;

create table moment(
    id bigint(10) not null auto_increment,
    createTime bigint not null comment '时间',
    addr text default null comment '地点',
    content text default null comment '内容',
    primary key(id)
)engine=InnoDB AUTO_INCREMENT=1 comment '拾光表';