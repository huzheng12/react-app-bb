
import { Url } from '@/utils/api.js'
import { BBASSET } from './action_type.js'
import { Get } from './action_http.js'


//获取资产和交易对 BB
export const bbasset = async (num) => {
  if (num !== 2) {
    return {
      type: BBASSET,
      data: [],
      aymbol_result: []
    }
  }

  /* Start of 获取资产  */
  const bbAssetObj = {}
  let asset_result = await Get(Url.bbAsset, bbAssetObj)
  asset_result = asset_result.data.data.asset
  /* End of 获取资产  */

  /* Start of 获取交易对  */
  const bbAymbol = { asset: asset_result[0].asset }
  let aymbol_result = await Get(Url.bbAymbol, bbAymbol)
  aymbol_result = aymbol_result.data.data.rows
  /* End of 获取交易对  */

  return {
    type: BBASSET,
    asset_result: asset_result,
    aymbol_result: aymbol_result
  }

}
