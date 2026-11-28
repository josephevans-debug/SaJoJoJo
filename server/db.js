import { Sequelize, DataTypes, } from 'sequelize';
import pg from 'pg';

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectModule: pg,
    dialectOptions:{ ssl: { require: true, rejectUnauthorized: false } },
    logging: false,
    define: { underscored: true, updatedAt: false },
});

export const User = sequelize.define("User", {
    username: {type : DataTypes.STRING, allowNull: false, unique: true},
    passwordHash: {type: DataTypes.STRING, allowNull: false},
}, { tableName: "users", timestamps: false });

export const Post = sequelize.define("Post", {
    title: {type: DataTypes.STRING, allowNull: false},
    body: {type: DataTypes.TEXT, allowNull: false},
    community: {type: DataTypes.STRING, allowNull: false}
}, { tableName: 'posts' });

export const Comment = sequelize.define("Comment", {
    body: { type: DataTypes.TEXT, allowNull: false },
}, { tableName: "comments"});

Post.belongsTo(User,    { foreignKey: 'userId', as: 'author'});
Comment.belongsTo(User, { foreignKey: 'userId', as: 'author'});
Comment.belongsTo(Post, { foreignKey: 'postId' });