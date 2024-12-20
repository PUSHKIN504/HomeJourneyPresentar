USE [HomeJourney]
GO
/****** Object:  Table [dbo].[tbcolaboradores]    Script Date: 8/12/2024 07:29:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbcolaboradores](
	[cola_id] [int] IDENTITY(1,1) NOT NULL,
	[cola_nombre] [varchar](100) NOT NULL,
	[cola_apelllido] [varchar](100) NOT NULL,
	[cola_sexo] [varchar](1) NOT NULL,
	[cola_email] [varchar](100) NOT NULL,
	[user_activo] [bit] NULL,
	[cola_direccion] [varchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[cola_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbcolaboradores_por_sucursales]    Script Date: 8/12/2024 07:29:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbcolaboradores_por_sucursales](
	[cosu_id] [int] IDENTITY(1,1) NOT NULL,
	[cola_id] [int] NOT NULL,
	[cola_activo] [bit] NULL,
	[sucu_id] [int] NOT NULL,
	[distancia_km] [decimal](5, 2) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[cosu_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbsucursales]    Script Date: 8/12/2024 07:29:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbsucursales](
	[sucu_id] [int] IDENTITY(1,1) NOT NULL,
	[sucu_nombre] [varchar](100) NOT NULL,
	[sucu_direccion] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[sucu_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbtransportistas]    Script Date: 8/12/2024 07:29:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbtransportistas](
	[trans_id] [int] IDENTITY(1,1) NOT NULL,
	[trans_nombre] [varchar](100) NOT NULL,
	[trans_apellido] [varchar](100) NOT NULL,
	[trans_tarifa_por_km] [decimal](10, 2) NOT NULL,
	[trans_activo] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[trans_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbusers]    Script Date: 8/12/2024 07:29:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbusers](
	[user_user_id] [int] IDENTITY(1,1) NOT NULL,
	[user_username] [varchar](50) NOT NULL,
	[user_password_hash] [text] NOT NULL,
	[user_role] [varchar](20) NOT NULL,
	[cola_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[user_user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbviajes]    Script Date: 8/12/2024 07:29:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbviajes](
	[viaj_id] [int] IDENTITY(1,1) NOT NULL,
	[sucu_id] [int] NULL,
	[user_user_id] [int] NULL,
	[trans_id] [int] NULL,
	[viaj_fecha] [date] NOT NULL,
	[total_km] [decimal](5, 2) NULL,
	[total_a_pagar] [decimal](10, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[viaj_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbviajes_detalle]    Script Date: 8/12/2024 07:29:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbviajes_detalle](
	[vide_id] [int] IDENTITY(1,1) NOT NULL,
	[viaj_id] [int] NULL,
	[cola_id] [int] NULL,
	[distancia_km] [decimal](5, 2) NOT NULL,
	[total_a_pagar] [decimal](10, 2) NOT NULL,
	[cosu_id] [int] NULL,
	[fecha_viaje] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[vide_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tbcolaboradores] ON 

INSERT [dbo].[tbcolaboradores] ([cola_id], [cola_nombre], [cola_apelllido], [cola_sexo], [cola_email], [user_activo], [cola_direccion]) VALUES (1, N'Juan', N'Pérez', N'M', N'juan.perez@example.com', 1, N'Choloma')
INSERT [dbo].[tbcolaboradores] ([cola_id], [cola_nombre], [cola_apelllido], [cola_sexo], [cola_email], [user_activo], [cola_direccion]) VALUES (2, N'Jason', N'Test', N'M', N'JasonT@gmail.com', 1, N'Barrio barandillas')
INSERT [dbo].[tbcolaboradores] ([cola_id], [cola_nombre], [cola_apelllido], [cola_sexo], [cola_email], [user_activo], [cola_direccion]) VALUES (3, N'J', N'T', N'M', N'JJjjj', 1, N'Col. Trejo')
INSERT [dbo].[tbcolaboradores] ([cola_id], [cola_nombre], [cola_apelllido], [cola_sexo], [cola_email], [user_activo], [cola_direccion]) VALUES (5, N'J', N'DS', N'M', N'ASJHJ', 1, N'Col. Moderna')
INSERT [dbo].[tbcolaboradores] ([cola_id], [cola_nombre], [cola_apelllido], [cola_sexo], [cola_email], [user_activo], [cola_direccion]) VALUES (7, N'J', N'DS', N'M', N'ASJHJ@Test.com', 1, N'Col. Periodista')
INSERT [dbo].[tbcolaboradores] ([cola_id], [cola_nombre], [cola_apelllido], [cola_sexo], [cola_email], [user_activo], [cola_direccion]) VALUES (8, N'Jason', N'Jeremy', N'M', N'JJJHJ@Gmail.commm', 1, N'Col. Prader')
INSERT [dbo].[tbcolaboradores] ([cola_id], [cola_nombre], [cola_apelllido], [cola_sexo], [cola_email], [user_activo], [cola_direccion]) VALUES (9, N'Sabdy', N'Mejia', N'F', N'sabdy@gmail.com', 1, N'Col. Limonar')
INSERT [dbo].[tbcolaboradores] ([cola_id], [cola_nombre], [cola_apelllido], [cola_sexo], [cola_email], [user_activo], [cola_direccion]) VALUES (10, N'Nohely', N'Rivera', N'F', N'nohe@gmail.com', 1, N'Col. Limonar')
INSERT [dbo].[tbcolaboradores] ([cola_id], [cola_nombre], [cola_apelllido], [cola_sexo], [cola_email], [user_activo], [cola_direccion]) VALUES (11, N'Roman ', N'Lopez', N'M', N'Roma@gmail.com', 1, N'Barrio Barandillas')
INSERT [dbo].[tbcolaboradores] ([cola_id], [cola_nombre], [cola_apelllido], [cola_sexo], [cola_email], [user_activo], [cola_direccion]) VALUES (12, N'Andres', N'Lopez', N'M', N'romandre@gmail.com', 1, N'Barandillas')
SET IDENTITY_INSERT [dbo].[tbcolaboradores] OFF
GO
SET IDENTITY_INSERT [dbo].[tbcolaboradores_por_sucursales] ON 

INSERT [dbo].[tbcolaboradores_por_sucursales] ([cosu_id], [cola_id], [cola_activo], [sucu_id], [distancia_km]) VALUES (1, 7, 1, 2, CAST(6.00 AS Decimal(5, 2)))
INSERT [dbo].[tbcolaboradores_por_sucursales] ([cosu_id], [cola_id], [cola_activo], [sucu_id], [distancia_km]) VALUES (2, 2, 1, 1, CAST(4.00 AS Decimal(5, 2)))
INSERT [dbo].[tbcolaboradores_por_sucursales] ([cosu_id], [cola_id], [cola_activo], [sucu_id], [distancia_km]) VALUES (3, 9, 1, 1, CAST(6.00 AS Decimal(5, 2)))
INSERT [dbo].[tbcolaboradores_por_sucursales] ([cosu_id], [cola_id], [cola_activo], [sucu_id], [distancia_km]) VALUES (4, 9, 1, 2, CAST(5.00 AS Decimal(5, 2)))
INSERT [dbo].[tbcolaboradores_por_sucursales] ([cosu_id], [cola_id], [cola_activo], [sucu_id], [distancia_km]) VALUES (8, 3, 1, 1, CAST(5.00 AS Decimal(5, 2)))
INSERT [dbo].[tbcolaboradores_por_sucursales] ([cosu_id], [cola_id], [cola_activo], [sucu_id], [distancia_km]) VALUES (9, 5, 1, 1, CAST(50.00 AS Decimal(5, 2)))
INSERT [dbo].[tbcolaboradores_por_sucursales] ([cosu_id], [cola_id], [cola_activo], [sucu_id], [distancia_km]) VALUES (10, 7, 1, 1, CAST(45.00 AS Decimal(5, 2)))
INSERT [dbo].[tbcolaboradores_por_sucursales] ([cosu_id], [cola_id], [cola_activo], [sucu_id], [distancia_km]) VALUES (12, 5, 1, 2, CAST(7.00 AS Decimal(5, 2)))
INSERT [dbo].[tbcolaboradores_por_sucursales] ([cosu_id], [cola_id], [cola_activo], [sucu_id], [distancia_km]) VALUES (13, 11, 1, 2, CAST(2.00 AS Decimal(5, 2)))
SET IDENTITY_INSERT [dbo].[tbcolaboradores_por_sucursales] OFF
GO
SET IDENTITY_INSERT [dbo].[tbsucursales] ON 

INSERT [dbo].[tbsucursales] ([sucu_id], [sucu_nombre], [sucu_direccion]) VALUES (1, N'Siman Satelite', N'Col. Satelite, Blvd Las Torres')
INSERT [dbo].[tbsucursales] ([sucu_id], [sucu_nombre], [sucu_direccion]) VALUES (2, N'Siman San Vicente', N'Polvorin, Plaza San Vicente')
SET IDENTITY_INSERT [dbo].[tbsucursales] OFF
GO
SET IDENTITY_INSERT [dbo].[tbtransportistas] ON 

INSERT [dbo].[tbtransportistas] ([trans_id], [trans_nombre], [trans_apellido], [trans_tarifa_por_km], [trans_activo]) VALUES (1, N'Jose', N'Lopez', CAST(50.00 AS Decimal(10, 2)), 1)
SET IDENTITY_INSERT [dbo].[tbtransportistas] OFF
GO
SET IDENTITY_INSERT [dbo].[tbusers] ON 

INSERT [dbo].[tbusers] ([user_user_id], [user_username], [user_password_hash], [user_role], [cola_id]) VALUES (1, N'juanperez', N'123', N'Gerente de tienda', 1)
INSERT [dbo].[tbusers] ([user_user_id], [user_username], [user_password_hash], [user_role], [cola_id]) VALUES (2, N'puhskin', N'123', N'Colaborador', 2)
SET IDENTITY_INSERT [dbo].[tbusers] OFF
GO
SET IDENTITY_INSERT [dbo].[tbviajes] ON 

INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (1, 1, 1, 1, CAST(N'2024-12-07' AS Date), CAST(3.00 AS Decimal(5, 2)), CAST(150.00 AS Decimal(10, 2)))
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (2, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (3, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (4, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (5, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (6, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (7, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (8, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (9, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (10, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (11, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (12, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (13, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (14, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (15, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (16, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (17, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (18, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (19, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (20, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (21, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (22, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (23, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (24, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (25, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (26, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (27, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (28, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (29, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (30, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (31, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (32, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (33, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (34, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (39, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (40, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (63, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (68, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (69, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (70, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (71, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (72, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (73, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (79, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (83, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (84, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (85, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (86, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (87, 1, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (88, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (89, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (90, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (91, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (92, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (93, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (94, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (95, 2, 1, 1, CAST(N'2024-12-08' AS Date), NULL, NULL)
INSERT [dbo].[tbviajes] ([viaj_id], [sucu_id], [user_user_id], [trans_id], [viaj_fecha], [total_km], [total_a_pagar]) VALUES (96, 2, 1, 1, CAST(N'2024-12-08' AS Date), CAST(2.00 AS Decimal(5, 2)), CAST(100.00 AS Decimal(10, 2)))
SET IDENTITY_INSERT [dbo].[tbviajes] OFF
GO
SET IDENTITY_INSERT [dbo].[tbviajes_detalle] ON 

INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (1, 1, 1, CAST(3.00 AS Decimal(5, 2)), CAST(150.00 AS Decimal(10, 2)), 1, CAST(N'2024-12-07' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (2, 1, 2, CAST(4.00 AS Decimal(5, 2)), CAST(200.00 AS Decimal(10, 2)), 2, CAST(N'2024-12-07' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (6, 1, 1, CAST(20.50 AS Decimal(5, 2)), CAST(500.75 AS Decimal(10, 2)), 1, CAST(N'2024-12-07' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (7, 1, 1, CAST(20.50 AS Decimal(5, 2)), CAST(500.75 AS Decimal(10, 2)), 1, CAST(N'2024-12-07' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (8, 1, 1, CAST(20.50 AS Decimal(5, 2)), CAST(500.75 AS Decimal(10, 2)), 1, CAST(N'2024-12-07' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (9, 1, 1, CAST(20.50 AS Decimal(5, 2)), CAST(500.75 AS Decimal(10, 2)), 1, CAST(N'2024-12-07' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (10, 1, NULL, CAST(20.50 AS Decimal(5, 2)), CAST(500.75 AS Decimal(10, 2)), 3, CAST(N'2024-12-07' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (11, 23, NULL, CAST(5.00 AS Decimal(5, 2)), CAST(250.00 AS Decimal(10, 2)), 4, CAST(N'2024-12-08' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (12, 24, NULL, CAST(5.00 AS Decimal(5, 2)), CAST(250.00 AS Decimal(10, 2)), 4, CAST(N'2024-12-08' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (13, 25, NULL, CAST(5.00 AS Decimal(5, 2)), CAST(250.00 AS Decimal(10, 2)), 4, CAST(N'2024-12-08' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (14, 27, NULL, CAST(3.00 AS Decimal(5, 2)), CAST(150.00 AS Decimal(10, 2)), 1, CAST(N'2024-12-08' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (15, 29, NULL, CAST(6.00 AS Decimal(5, 2)), CAST(300.00 AS Decimal(10, 2)), 3, CAST(N'2024-12-08' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (17, 63, NULL, CAST(4.00 AS Decimal(5, 2)), CAST(200.00 AS Decimal(10, 2)), 2, CAST(N'2024-12-08' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (18, 79, NULL, CAST(50.00 AS Decimal(5, 2)), CAST(2500.00 AS Decimal(10, 2)), 9, CAST(N'2024-12-08' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (19, 79, NULL, CAST(5.00 AS Decimal(5, 2)), CAST(250.00 AS Decimal(10, 2)), 8, CAST(N'2024-12-08' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (20, 79, NULL, CAST(45.00 AS Decimal(5, 2)), CAST(2250.00 AS Decimal(10, 2)), 10, CAST(N'2024-12-08' AS Date))
INSERT [dbo].[tbviajes_detalle] ([vide_id], [viaj_id], [cola_id], [distancia_km], [total_a_pagar], [cosu_id], [fecha_viaje]) VALUES (21, 96, NULL, CAST(2.00 AS Decimal(5, 2)), CAST(100.00 AS Decimal(10, 2)), 13, CAST(N'2024-12-08' AS Date))
SET IDENTITY_INSERT [dbo].[tbviajes_detalle] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__tbcolabo__6CBE687E5369A01D]    Script Date: 8/12/2024 07:29:37 ******/
ALTER TABLE [dbo].[tbcolaboradores] ADD UNIQUE NONCLUSTERED 
(
	[cola_email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [UC_ColaboradorSucursal]    Script Date: 8/12/2024 07:29:37 ******/
ALTER TABLE [dbo].[tbcolaboradores_por_sucursales] ADD  CONSTRAINT [UC_ColaboradorSucursal] UNIQUE NONCLUSTERED 
(
	[cola_id] ASC,
	[sucu_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__tbusers__94975AD5D3D1F26E]    Script Date: 8/12/2024 07:29:37 ******/
ALTER TABLE [dbo].[tbusers] ADD UNIQUE NONCLUSTERED 
(
	[user_username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[tbcolaboradores] ADD  DEFAULT ((1)) FOR [user_activo]
GO
ALTER TABLE [dbo].[tbcolaboradores_por_sucursales] ADD  DEFAULT ((1)) FOR [cola_activo]
GO
ALTER TABLE [dbo].[tbtransportistas] ADD  DEFAULT ((1)) FOR [trans_activo]
GO
ALTER TABLE [dbo].[tbcolaboradores_por_sucursales]  WITH CHECK ADD  CONSTRAINT [FK_tbcolaboradores] FOREIGN KEY([cola_id])
REFERENCES [dbo].[tbcolaboradores] ([cola_id])
GO
ALTER TABLE [dbo].[tbcolaboradores_por_sucursales] CHECK CONSTRAINT [FK_tbcolaboradores]
GO
ALTER TABLE [dbo].[tbcolaboradores_por_sucursales]  WITH CHECK ADD  CONSTRAINT [FK_tbsucursales] FOREIGN KEY([sucu_id])
REFERENCES [dbo].[tbsucursales] ([sucu_id])
GO
ALTER TABLE [dbo].[tbcolaboradores_por_sucursales] CHECK CONSTRAINT [FK_tbsucursales]
GO
ALTER TABLE [dbo].[tbviajes]  WITH CHECK ADD FOREIGN KEY([sucu_id])
REFERENCES [dbo].[tbsucursales] ([sucu_id])
GO
ALTER TABLE [dbo].[tbviajes]  WITH CHECK ADD FOREIGN KEY([trans_id])
REFERENCES [dbo].[tbtransportistas] ([trans_id])
GO
ALTER TABLE [dbo].[tbviajes]  WITH CHECK ADD FOREIGN KEY([user_user_id])
REFERENCES [dbo].[tbusers] ([user_user_id])
GO
ALTER TABLE [dbo].[tbviajes_detalle]  WITH CHECK ADD FOREIGN KEY([viaj_id])
REFERENCES [dbo].[tbviajes] ([viaj_id])
GO
ALTER TABLE [dbo].[tbviajes_detalle]  WITH CHECK ADD  CONSTRAINT [FK_tbviajes_detalle_tbcolaboradores_por_sucursales_cosu_id] FOREIGN KEY([cosu_id])
REFERENCES [dbo].[tbcolaboradores_por_sucursales] ([cosu_id])
GO
ALTER TABLE [dbo].[tbviajes_detalle] CHECK CONSTRAINT [FK_tbviajes_detalle_tbcolaboradores_por_sucursales_cosu_id]
GO
ALTER TABLE [dbo].[tbcolaboradores_por_sucursales]  WITH CHECK ADD CHECK  (([distancia_km]>(0) AND [distancia_km]<=(50)))
GO
ALTER TABLE [dbo].[tbusers]  WITH CHECK ADD CHECK  (([user_role]='Colaborador' OR [user_role]='Gerente de tienda'))
GO
ALTER TABLE [dbo].[tbviajes]  WITH CHECK ADD CHECK  (([viaj_fecha]<=getdate()))
GO
ALTER TABLE [dbo].[tbviajes_detalle]  WITH CHECK ADD  CONSTRAINT [chk_distancia] CHECK  (([distancia_km]<=(50)))
GO
ALTER TABLE [dbo].[tbviajes_detalle] CHECK CONSTRAINT [chk_distancia]
GO
ALTER TABLE [dbo].[tbviajes_detalle]  WITH CHECK ADD CHECK  (([distancia_km]>(0) AND [distancia_km]<=(50)))
GO
/****** Object:  StoredProcedure [dbo].[SP_ActualizarColaboradorSucursal]    Script Date: 8/12/2024 07:29:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_ActualizarColaboradorSucursal]
    @cosu_id INT,
    @cola_id INT,
    @sucu_id INT,
    @distancia_km DECIMAL(5, 2)
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRY
        IF NOT EXISTS (
            SELECT 1
            FROM [dbo].[tbcolaboradores_por_sucursales]
            WHERE cosu_id = @cosu_id
        )
        BEGIN
            SELECT 2; 
            RETURN;
        END

        UPDATE [dbo].[tbcolaboradores_por_sucursales]
        SET cola_id = @cola_id,
            sucu_id = @sucu_id,
            distancia_km = @distancia_km
        WHERE cosu_id = @cosu_id;

        SELECT 1; 
    END TRY
    BEGIN CATCH
        SELECT 0;
        SELECT ERROR_MESSAGE();
    END CATCH
END;

GO
/****** Object:  StoredProcedure [dbo].[SP_Colaboradores_Insertar]    Script Date: 8/12/2024 07:29:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_Colaboradores_Insertar]
    @cola_nombre NVARCHAR(100),
    @cola_apellido NVARCHAR(100),
    @cola_sexo NVARCHAR(10),
    @cola_email NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO tbcolaboradores (cola_nombre, cola_apelllido, cola_sexo, cola_email)
    VALUES (@cola_nombre, @cola_apellido, @cola_sexo, @cola_email);
	select 1
END
GO
/****** Object:  StoredProcedure [dbo].[SP_Colaboradores_Listar]    Script Date: 8/12/2024 07:29:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_Colaboradores_Listar]
AS
BEGIN
    SELECT 
        cola_id, 
        CONCAT( cola_nombre, ' ' ,cola_apelllido) as cola_nombre, 
        cola_apelllido, 
        cola_sexo, 
        cola_email, 
        user_activo
    FROM 
        tbcolaboradores;
END
GO
/****** Object:  StoredProcedure [dbo].[SP_DetalleViaje_Insertar]    Script Date: 8/12/2024 07:29:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SP_DetalleViaje_Insertar]
    @viaj_id INT,
    @distancia_km DECIMAL(10, 2),
    @total_a_pagar DECIMAL(10, 2),
    @cosu_id INT,
    @fecha_viaje DATE
AS
BEGIN
    SET NOCOUNT ON;

    

    
    IF EXISTS (
        SELECT 1
        FROM [HomeJourney].[dbo].[tbviajes_detalle] vd
        WHERE @cosu_id = vd.cosu_id
          AND vd.fecha_viaje  = @fecha_viaje
    )
    BEGIN
        SELECT 0 AS Resultado; 
		delete from tbviajes
		where viaj_id = @viaj_id
        RETURN;
		
    END

    
    INSERT INTO [HomeJourney].[dbo].[tbviajes_detalle] (
        [viaj_id],
        [distancia_km],
        [total_a_pagar],
        [cosu_id],
        [fecha_viaje]
    )
    VALUES (
        @viaj_id,
        @distancia_km,
        @total_a_pagar,
        @cosu_id,
        @fecha_viaje
    );

    SELECT 1 AS Resultado; -- Inserción exitosa
END

GO
/****** Object:  StoredProcedure [dbo].[SP_EliminarColaboradorSucursal]    Script Date: 8/12/2024 07:29:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

  CREATE PROCEDURE [dbo].[SP_EliminarColaboradorSucursal]
    @cosu_id INT
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRY
       
        IF EXISTS (
            SELECT 1
            FROM [dbo].tbviajes_detalle vd
            INNER JOIN [dbo].[tbcolaboradores_por_sucursales] cps ON vd.cola_id = cps.cola_id
            WHERE cps.cosu_id = @cosu_id
        )
        BEGIN
            SELECT 2; 
            RETURN;
        END

        
        IF NOT EXISTS (
            SELECT 1
            FROM [dbo].[tbcolaboradores_por_sucursales]
            WHERE cosu_id = @cosu_id
        )
        BEGIN
            SELECT 3;
            RETURN;
        END

        DELETE FROM [dbo].[tbcolaboradores_por_sucursales]
        WHERE cosu_id = @cosu_id;

        SELECT 1; 
    END TRY
    BEGIN CATCH
        
        SELECT 0;
        SELECT ERROR_MESSAGE();
    END CATCH
END;

GO
/****** Object:  StoredProcedure [dbo].[SP_EncabezadoViaje_Insertar]    Script Date: 8/12/2024 07:29:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
  CREATE PROCEDURE [dbo].[SP_EncabezadoViaje_Insertar]
    @sucu_id INT,
    @user_user_id INT,
    @trans_id INT,
    @viaj_fecha DATE
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO [HomeJourney].[dbo].[tbviajes] (
        [sucu_id],
        [user_user_id],
        [trans_id],
        [viaj_fecha]
    )
    VALUES (
        @sucu_id,
        @user_user_id,
        @trans_id,
        @viaj_fecha
    );
	SELECT SCOPE_IDENTITY() AS viaj_id, 1 AS CodeStatus;


END
GO
/****** Object:  StoredProcedure [dbo].[SP_GraficoViajesPorSucursal]    Script Date: 8/12/2024 07:29:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SP_GraficoViajesPorSucursal]
AS
BEGIN
    SET NOCOUNT ON;

    SELECT 
        s.sucu_nombre ,
        COUNT(v.viaj_id) AS TotalViajes
    FROM tbviajes v
    INNER JOIN tbsucursales s ON v.sucu_id = s.sucu_id
    GROUP BY s.sucu_nombre
    ORDER BY TotalViajes DESC;
END
GO
/****** Object:  StoredProcedure [dbo].[SP_InsertarColaboradorSucursal]    Script Date: 8/12/2024 07:29:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_InsertarColaboradorSucursal]
    @cola_id INT,
    @sucu_id INT,
    @distancia_km DECIMAL(5, 2)
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRY
        IF EXISTS (
            SELECT 1
            FROM [dbo].[tbcolaboradores_por_sucursales]
            WHERE cola_id = @cola_id AND sucu_id = @sucu_id
        )
        BEGIN
            select 2;
            RETURN;
        END

        INSERT INTO [dbo].[tbcolaboradores_por_sucursales] (cola_id, sucu_id, distancia_km)
        VALUES (@cola_id, @sucu_id, @distancia_km);

        select  1;
    END TRY
    BEGIN CATCH
        select 0;
        select  ERROR_MESSAGE();
    END CATCH
END;

GO
/****** Object:  StoredProcedure [dbo].[SP_Login]    Script Date: 8/12/2024 07:29:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_Login]
    @user_username NVARCHAR(255),  
    @user_password_hash NVARCHAR(255) 
AS
BEGIN
    BEGIN TRY
        DECLARE @result INT;
        DECLARE @user_id INT;
        DECLARE @user_role NVARCHAR(50);
        
        SELECT 
            @user_id = u.user_user_id,
            @user_role = u.user_role
        FROM 
            dbo.tbusers u
        WHERE 
            u.user_username = @user_username
            AND CAST(u.user_password_hash AS NVARCHAR(255)) = @user_password_hash;
        
        IF (@user_id IS NOT NULL)
        BEGIN
            SET @result = 1; 
            SELECT 
                @result AS Status,
                @user_id AS UserId,
                @user_role AS UserRole;
        END
        ELSE
        BEGIN
            SET @result = 0;
            SELECT @result AS Status, 'Invalid username or password' AS ErrorMessage;
        END
    END TRY
    BEGIN CATCH
        SET @result = 0;
        SELECT @result AS Status, ERROR_MESSAGE() AS ErrorMessage;
    END CATCH
END

GO
/****** Object:  StoredProcedure [dbo].[SP_ObtenerColaboradoresSucursales]    Script Date: 8/12/2024 07:29:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_ObtenerColaboradoresSucursales]
AS
BEGIN
    SELECT 
        cps.cosu_id,
        cps.cola_id, 
        c.cola_nombre + ' ' + c.cola_apelllido AS cola_nombre_completo, 
        c.cola_email, 
        c.cola_sexo, 
        c.user_activo AS cola_activo, 
        cps.sucu_id, 
        s.sucu_nombre, 
        s.sucu_direccion, 
        cps.distancia_km 
    FROM 
        [dbo].[tbcolaboradores_por_sucursales] cps
    INNER JOIN 
        [dbo].[tbcolaboradores] c ON cps.cola_id = c.cola_id
    INNER JOIN 
        [dbo].[tbsucursales] s ON cps.sucu_id = s.sucu_id
    ORDER BY 
        cps.cosu_id ASC;
END;

GO
/****** Object:  StoredProcedure [dbo].[SP_ReporteViajesTransportista]    Script Date: 8/12/2024 07:29:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SP_ReporteViajesTransportista]
    @trans_id INT,
    @fecha_inicio DATE,
    @fecha_fin DATE
AS
BEGIN
    SET NOCOUNT ON;

    SELECT 
        v.viaj_id,
        v.viaj_fecha,
        t.trans_nombre + ' ' + t.trans_apellido AS transportista,
        s.sucu_nombre AS sucursal,
        v.total_km,
        v.total_a_pagar,
		c.cola_nombre + ' ' + c.cola_apelllido as c_nombre,
		case when c.cola_sexo = 'M' then 'Masculino' else 'Femenino' END as cola_sexo,
		cs.distancia_km,
		cs.distancia_km,
		t.[trans_tarifa_por_km] * cs.distancia_km as total_pago_individual,
		t.[trans_tarifa_por_km],
		c.cola_direccion
		

    FROM 
        tbviajes v
    INNER JOIN 
        tbtransportistas t ON v.trans_id = t.trans_id
    INNER JOIN 
        tbsucursales s ON v.sucu_id = s.sucu_id
	INNER JOIN
		tbviajes_detalle vd ON vd.viaj_id = v.viaj_id
	INNER JOIN
		tbcolaboradores_por_sucursales cs ON cs.cosu_id =vd.cosu_id
	INNER JOIN 
		tbcolaboradores c ON c.cola_id = cs.cola_id
    WHERE 
        v.trans_id = @trans_id
        AND v.viaj_fecha BETWEEN @fecha_inicio AND @fecha_fin;

    SELECT 
        SUM(v.total_a_pagar) AS total_a_pagar
    FROM 
        tbviajes v
    WHERE 
        v.trans_id = @trans_id
        AND v.viaj_fecha BETWEEN @fecha_inicio AND @fecha_fin;
END;

GO
/****** Object:  StoredProcedure [dbo].[SP_Select_UserXCol]    Script Date: 8/12/2024 07:29:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_Select_UserXCol] 
    @user_id INT
AS
BEGIN
    BEGIN TRY

        SELECT 
            u.user_user_id,
            u.user_username,
            u.user_password_hash,
            u.user_role,
            c.cola_id,
            c.cola_nombre,
            c.cola_apelllido,
            c.cola_sexo,
            c.cola_email,
            c.user_activo
        FROM 
            dbo.tbusers u
        INNER JOIN 
            dbo.tbcolaboradores c
        ON 
            u.cola_id = c.cola_id
        WHERE 
            u.user_user_id = @user_id;

     
        --SELECT 1 AS Status;
    END TRY
    BEGIN CATCH
        

        --SELECT 0 AS Status, ERROR_MESSAGE() AS ErrorMessage;
    END CATCH
END

GO
/****** Object:  StoredProcedure [dbo].[SP_Sucursales_Listar]    Script Date: 8/12/2024 07:29:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_Sucursales_Listar]
AS
BEGIN
    SELECT 
	[sucu_id],
    [sucu_nombre],
	[sucu_direccion]
       
    FROM 
        [tbsucursales];
END

GO
/****** Object:  StoredProcedure [dbo].[SP_Transportistas_Listar]    Script Date: 8/12/2024 07:29:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[SP_Transportistas_Listar]
as
Begin
	select trans_id,
		trans_nombre+' '+trans_apellido nombre_transp,
		trans_tarifa_por_km
	from [dbo].[tbtransportistas]
END
GO
/****** Object:  Trigger [dbo].[trg_UpdateViaje]    Script Date: 8/12/2024 07:29:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[trg_UpdateViaje]
ON [dbo].[tbviajes_detalle]
AFTER INSERT, UPDATE, DELETE
AS
BEGIN

    DECLARE @viaj_id INT;

    SELECT TOP 1 @viaj_id = COALESCE(INSERTED.viaj_id, DELETED.viaj_id)
    FROM INSERTED
    FULL OUTER JOIN DELETED ON INSERTED.viaj_id = DELETED.viaj_id;

    UPDATE tbviajes
    SET 
        total_km = ISNULL(SUMVD.TotalKm, 0),
        total_a_pagar = ISNULL(SUMVD.TotalPagar, 0)
    FROM tbviajes v
    LEFT JOIN (
        SELECT 
            vd.viaj_id,
            SUM(vd.distancia_km) AS TotalKm,
            SUM(vd.distancia_km * t.trans_tarifa_por_km) AS TotalPagar
        FROM tbviajes_detalle vd
        INNER JOIN tbviajes v ON v.viaj_id = vd.viaj_id
        INNER JOIN tbtransportistas t ON t.trans_id = v.trans_id
        WHERE vd.viaj_id = @viaj_id
        GROUP BY vd.viaj_id
    ) AS SUMVD ON v.viaj_id = SUMVD.viaj_id
    WHERE v.viaj_id = @viaj_id;
END;

GO
ALTER TABLE [dbo].[tbviajes_detalle] ENABLE TRIGGER [trg_UpdateViaje]
GO
