import numericSort from './numeric_sort';
import quantileRankSorted from './quantile_rank_sorted';

/**
 * This function returns the quantile in which one would find the given value in
 * the given array. It will require to copy and sort your array beforehand, so
 * if you know your array is already sorted, you would rather use
 * `quantileRankSorted`.
 *
 * @param {Array<number>} x input
 * @returns {number} value value
 * @example
 * quantileRank([4, 3, 1, 2], 3); // => 0.75
 * quantileRank([4, 3, 2, 3, 1], 3); // => 0.7
 * quantileRank([2, 4, 1, 3], 6); // => 1
 * quantileRank([5, 3, 1, 2, 3], 4); // => 0.8
 */
function quantileRank(
    x: number[],
    value: number): number {

    // Cloning and sorting the array
    var sortedCopy = numericSort(x);

    return quantileRankSorted(sortedCopy, value);
}

export default quantileRank;
