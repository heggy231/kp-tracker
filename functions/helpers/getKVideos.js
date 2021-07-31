const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  // TODO: get courses
  try {
    const kVideos = await table.select().firstPage();
    const formattedKVideos = kVideos.map((kVideo) => ({
      id: kVideo.id,
      ...kVideo.fields,
    }));
    // status code, body is  data
    return formattedReturn(200, formattedKVideos);
  } catch (error) {
    console.error(error);
    return formattedReturn(500, { msg: "oops that did'nt work." });
  }
};
