
CREATE TABLE [dbo].[Products](
	[productId] [varchar](100) PRIMARY KEY NOT NULL,
	[Name] [varchar](255) NOT NULL,
	[Description] [varchar](255) NOT NULL,
	[Category] [varchar](255) NOT NULL,
	[Price] [decimal](10, 2) NOT NULL,
	[ImageUrl] [varchar](255) NOT NULL,
  createdAt DATETIME NOT NULL DEFAULT GETDATE()
);