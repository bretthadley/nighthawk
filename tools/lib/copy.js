/**
 * Created by Brett Hadley on 19/03/2016.
 */
import ncp from 'ncp';

export default async(source, dest) => new Promise((resolve, reject) => {
    ncp(source, dest, err => err ? reject(err) : resolve());
});
