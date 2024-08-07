import { Request, Response } from "express";
import Restaurant from "../models/restaurant";
import cloudinary from "cloudinary";
import mongoose from "mongoose";
import Order from "../models/order";

const getCurrentRestaurant = async (req: Request, res: Response) => {
  try {
    const currentRestaurant = await Restaurant.findOne({ user: req.userId });
    if (!currentRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.json(currentRestaurant);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

const createMyRestaurant = async (req: Request, res: Response) => {
  try {
    const existingRestaurant = await Restaurant.findOne({
      Restaurant: req.userId,
    });

    if (existingRestaurant) {
      return res
        .status(409)
        .json({ message: "Restaurant restaurant already exists" });
    }

    const imageUrl = await uploadImage(req.file as Express.Multer.File);

    const restaurant = new Restaurant(req.body);
    restaurant.imageUrl = imageUrl;
    restaurant.user = new mongoose.Types.ObjectId(req.userId);
    restaurant.lastUpdated = new Date();
    await restaurant.save();

    res.status(201).send(restaurant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const updateMyRestaurant = async (req: Request, res: Response) => {
  try {
    const currentRestaurant = await Restaurant.findOne({ user: req.userId });

    if (!currentRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    currentRestaurant.restaurantName = req.body.restaurantName;
    currentRestaurant.city = req.body.city;
    currentRestaurant.country = req.body.country;
    currentRestaurant.deliveryPrice = req.body.deliveryPrice;
    currentRestaurant.estimatedDeliveryTime = req.body.estimatedDeliveryTime;
    currentRestaurant.cuisines = req.body.cuisines;
    currentRestaurant.menuItems = req.body.menuItems;
    currentRestaurant.lastUpdated = new Date();

    if (req.file) {
      const imageUrl = await uploadImage(req.file as Express.Multer.File);
      currentRestaurant.imageUrl = imageUrl;
    }

    await currentRestaurant.save();
    res.status(200).send(currentRestaurant);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const getMyRestaurantOrders = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.findOne({ user: req.userId });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found!" });
    }
    const orders = await Order.find({ restaurant: restaurant._id })
      .populate("restaurant")
      .populate("user");

    res.json(orders);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }

    const restaurant = await Restaurant.findById(order.restaurant);

    if (restaurant?.user?._id.toString() !== req.userId) {
      return res.status(401).send();
    }

    order.status = status;
    await order.save();

    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unable to update order status" });
  }
};

const uploadImage = async (file: Express.Multer.File) => {
  const image = file;
  const base64Image = Buffer.from(image.buffer).toString("base64");
  const dataURI = `data:${image.mimetype};base64,${base64Image}`;

  const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);
  return uploadResponse.url;
};

export default {
  updateOrderStatus,
  getMyRestaurantOrders,
  getCurrentRestaurant,
  createMyRestaurant,
  updateMyRestaurant,
};
