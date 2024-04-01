import { createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Returns a promise that is resolved when the time is completed.
 * @param {number} time
 * @returns {Promise<string>}
 */
export const SampleAsyncTask = (time = 3, taskName = "Test") => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task Completed: "+taskName);
    }, time * 1000);
  });
};

export const SampleAsyncThunk = createAsyncThunk(
  "demo/sampleAsyncThunk",
  async (props, thunkAPI) => {
      const response = await SampleAsyncTask(props.time, props.taskName);
    return response;
  }
);
