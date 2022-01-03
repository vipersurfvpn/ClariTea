/**
 * @module  actions.js
 * @author Alexis Smith & Brit Lim & Philip Yoo
 * @date 1/3/2022
 * @description Action Creators
 * 
 * 
 */

 /* 
 export const CONNECT_FILE
 */

 import { tree } from 'd3';
import * as types from '../constants/actionTypes';

 export const fileUpload = (input) => ({
   type: types.CONNECT_FILE,
   payload: input
 })

 export const renderTree = () => ({
   type: types.RENDER_TREE
 })
 
 export const replicationFactor = (input) => ({
   type: types.REPLICATION_FACTOR,
   payload: input
 })